'use client';

import { useEffect, useRef, useState } from 'react';
import { ShardElement } from './ShardElement';
import styles from './HeroSection.module.css';

interface ShardPosition {
  id: string;
  label: string;
  baseX: number;  // Desktop-only positioning
  baseY: number;
  offsetX: number;
  offsetY: number;
  color: 'cyan' | 'magenta';
  image: string;
}

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shardOffsets, setShardOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Desktop-only shard positions for loose constellation
  const desktopShards: ShardPosition[] = [
    {
      id: 'wuthering',
      label: 'Wuthering Waves',
      baseX: 85,      // 85% from left
      baseY: 15,      // 15% from top (higher)
      offsetX: -20,   // 20px drift left
      offsetY: -30,   // 30px drift up
      color: 'cyan',
      image: '/images/wuthering-eye.png',
    },
    {
      id: 'zzz',
      label: 'ZZZ',
      baseX: 88,      // Further right
      baseY: 25,      // Higher
      offsetX: 25,
      offsetY: -35,
      color: 'magenta',
      image: '/images/zzz-eye.png',
    },
    {
      id: 'hsr',
      label: 'Honkai: Star Rail',
      baseX: 82,      // Left side
      baseY: 75,      // Lower
      offsetX: -25,
      offsetY: 25,
      color: 'magenta',
      image: '/images/hsr-eye.png',
    },
    {
      id: 'genshin',
      label: 'Genshin Impact',
      baseX: 90,      // Right side
      baseY: 70,      // Lower
      offsetX: 20,
      offsetY: 20,
      color: 'cyan',
      image: '/images/genshin-eye.png',
    },
  ];

  // Center anchor (LaaVin logo/pentagon)
  const centerShard: ShardPosition = {
    id: 'laavin-center',
    label: 'LaaVin Store',
    baseX: 87,
    baseY: 45,
    offsetX: 0,
    offsetY: 0,
    color: 'cyan',
    image: '/images/laavin-logo.png',
  };

  // Detect viewport size and set layout mode
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Parallax animation for desktop constellation
  useEffect(() => {
    if (!isDesktop) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateShards = () => {
      const newOffsets: Record<string, { x: number; y: number }> = {};

      // Parallax for each shard based on mouse position
      [...desktopShards, centerShard].forEach((shard) => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        // Calculate parallax depth (shards at different depths)
        const depthFactor = shard.id === 'laavin-center' ? 0.3 : 0.6;

        const deltaX = (mouseX - containerCenterX) * depthFactor * 0.01;
        const deltaY = (mouseY - containerCenterY) * depthFactor * 0.01;

        newOffsets[shard.id] = {
          x: shard.offsetX + deltaX,
          y: shard.offsetY + deltaY,
        };
      });

      setShardOffsets(newOffsets);
      animationFrameRef.current = requestAnimationFrame(animateShards);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animateShards);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDesktop, desktopShards, centerShard]);

  return (
    <div
      ref={containerRef}
      className={`${styles.heroContainer} ${isDesktop ? styles.desktop : styles.mobile}`}
    >
      {/* LEFT COLUMN: Text & CTA (Static, unchanged) */}
      <div className={styles.leftColumn}>
        <div className={styles.content}>
          <h1 className={styles.title}>JOKI GAME TERPERCAYA #1</h1>

          <p className={styles.subtitle}>
            Layanan Joki terpercaya dengan tim profesional berpengalaman 5+ tahun
          </p>

          <p className={styles.description}>
            Nikmati kemudahan dan keamanan dalam setiap transaksi. Kami menyediakan layanan
            joki berkualitas tinggi untuk semua game populer dengan garansi kepuasan pelanggan.
          </p>

          <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Pesan Joki Sekarang
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Lihat Harga
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Dynamic Shard Constellation */}
      <div className={styles.rightColumn}>
        <div className={styles.constellationContainer}>
          {/* Center anchor - LaaVin logo */}
          <ShardElement
            shard={centerShard}
            offset={shardOffsets[centerShard.id] || { x: 0, y: 0 }}
            isDesktop={isDesktop}
            isCenter={true}
          />

          {/* Four game shards - loose spacing on desktop */}
          {desktopShards.map((shard) => (
            <ShardElement
              key={shard.id}
              shard={shard}
              offset={shardOffsets[shard.id] || { x: 0, y: 0 }}
              isDesktop={isDesktop}
              isCenter={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
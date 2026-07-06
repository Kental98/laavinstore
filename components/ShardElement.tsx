import { CSSProperties } from 'react';
import styles from './ShardElement.module.css';

interface ShardElementProps {
  shard: {
    id: string;
    baseX: number;
    baseY: number;
    color: 'cyan' | 'magenta';
    image: string;
    label: string;
  };
  offset: { x: number; y: number };
  isDesktop: boolean;
  isCenter: boolean;
}

export function ShardElement({
  shard,
  offset,
  isDesktop,
  isCenter,
}: ShardElementProps) {
  const style: CSSProperties = {
    // Desktop: absolute positioning with parallax
    ...(isDesktop && {
      left: `${shard.baseX}%`,
      top: `${shard.baseY}%`,
      transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
    }),
  };

  return (
    <div
      className={`${styles.shard} ${styles[shard.color]} ${
        isCenter ? styles.center : styles.floating
      } ${isDesktop ? styles.desktopMode : styles.mobileMode}`}
      style={style}
      data-shard-id={shard.id}
      aria-label={shard.label}
    >
      <img
        src={shard.image}
        alt={shard.label}
        className={styles.shardImage}
        loading="lazy"
      />
    </div>
  );
}
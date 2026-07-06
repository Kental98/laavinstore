/**
 * DYNAMIC FLOATING CONSTELLATION SYSTEM
 * Desktop: Parallax-driven loose shard distribution
 * Mobile: Static compact cluster grid
 */

export interface ShardConfig {
  id: string;
  baseX: number;
  baseY: number;
  depth: number;
  maxDrift: number;
}

export interface Shard extends ShardConfig {
  element: HTMLElement | null;
  currentX: number;
  currentY: number;
}

export class ConstellationController {
  private container: HTMLElement;
  private isDesktop: boolean;
  private mouse: { x: number; y: number } = { x: 0, y: 0 };
  private shards: Shard[] = [];
  private animationFrameId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(containerEl: HTMLElement) {
    this.container = containerEl;
    this.isDesktop = window.innerWidth >= 1440;
    this.init();
  }

  private init(): void {
    this.detectViewport();
    this.setupEventListeners();

    if (this.isDesktop) {
      this.initializeDesktopConstellation();
    } else {
      this.initializeMobileCluster();
    }
  }

  /**
   * VIEWPORT DETECTION
   * Triggers layout mode switch on resize
   */
  private detectViewport(): void {
    const handleResize = () => {
      const wasDesktop = this.isDesktop;
      this.isDesktop = window.innerWidth >= 1440;

      if (wasDesktop !== this.isDesktop) {
        this.switchLayout();
      }
    };

    window.addEventListener('resize', handleResize);
  }

  private switchLayout(): void {
    if (this.isDesktop) {
      this.initializeDesktopConstellation();
    } else {
      this.initializeMobileCluster();
    }
  }

  /**
   * DESKTOP: LOOSE DYNAMIC CONSTELLATION
   * Each shard has fixed base position + parallax offset
   */
  private initializeDesktopConstellation(): void {
    const shardConfigs: ShardConfig[] = [
      {
        id: 'wuthering',
        baseX: 85,
        baseY: 15,
        depth: 0.6,
        maxDrift: 30,
      },
      { id: 'zzz', baseX: 88, baseY: 25, depth: 0.6, maxDrift: 30 },
      { id: 'hsr', baseX: 82, baseY: 75, depth: 0.6, maxDrift: 30 },
      { id: 'genshin', baseX: 90, baseY: 70, depth: 0.6, maxDrift: 30 },
      {
        id: 'laavin-center',
        baseX: 87,
        baseY: 45,
        depth: 0.3,
        maxDrift: 15,
      },
    ];

    this.shards = shardConfigs.map((config) => ({
      ...config,
      element: this.container.querySelector(`[data-shard-id="${config.id}"]`) as HTMLElement,
      currentX: config.baseX,
      currentY: config.baseY,
    }));

    this.startParallaxAnimation();
  }

  private startParallaxAnimation(): void {
    const animate = () => {
      this.shards.forEach((shard) => {
        if (!shard.element) return;

        const rect = this.container.getBoundingClientRect();
        const containerCenterX = rect.left + rect.width / 2;
        const containerCenterY = rect.top + rect.height / 2;

        // Calculate parallax offset
        const deltaX = (this.mouse.x - containerCenterX) * shard.depth * 0.008;
        const deltaY = (this.mouse.y - containerCenterY) * shard.depth * 0.008;

        // Clamp drift to maxDrift value
        const clampedX = Math.max(
          -shard.maxDrift,
          Math.min(shard.maxDrift, deltaX)
        );
        const clampedY = Math.max(
          -shard.maxDrift,
          Math.min(shard.maxDrift, deltaY)
        );

        // Apply transform
        shard.element.style.setProperty(
          'transform',
          `translate(calc(-50% + ${clampedX}px), calc(-50% + ${clampedY}px))`
        );

        // Update current position
        shard.currentX = shard.baseX + (clampedX / rect.width) * 100;
        shard.currentY = shard.baseY + (clampedY / rect.height) * 100;
      });

      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  /**
   * MOBILE: COMPACT STATIC CLUSTER
   * Reverts to grid layout, no parallax
   */
  private initializeMobileCluster(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.shards.forEach((shard) => {
      if (shard.element) {
        shard.element.style.setProperty('transform', 'none');
      }
    });
  }

  /**
   * MOUSE TRACKING (Desktop only)
   */
  private setupEventListeners(): void {
    const handleMouseMove = (e: MouseEvent) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
  }

  public destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
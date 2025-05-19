import styles from './HeartRain.module.css';
import { useHeartRain } from './useHeartRain';
import { HEART_CONFIG, HEART_TYPES } from './constants';

const HeartRain = () => {
  const { hearts, createHearts } = useHeartRain();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>omana+nuca=</h1>
        <button 
          onClick={createHearts} 
          className={styles.triggerButton}
          aria-label="Create falling hearts"
        >
          click me
        </button>
      </div>

      <div className={styles.heartContainer}>
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={`${styles.heart} ${
              heart.type === HEART_TYPES.PINK ? styles.heartPink : styles.heartRed
            }`}
            style={{
              left: `${heart.left}%`,
              width: `${HEART_CONFIG.sizes.mobile}px`,
              height: `${HEART_CONFIG.sizes.mobile}px`,
              animationDuration: `${heart.animationDuration}s`,
              animationDelay: `${heart.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeartRain;
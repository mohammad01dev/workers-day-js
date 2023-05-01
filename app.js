setInterval(() => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spreed: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
}, 1000)
module.exports = {
    apps: [
      {
        name: "next-app",
        script: "pnpm",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  
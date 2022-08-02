process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  for (let i = 0; i < +n[1]; i++) {
    console.log("*".repeat(+n[0]));
  }
});

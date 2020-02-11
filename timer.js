const input = process.argv.slice(2).sort((a, b) => a - b);


for (const value of input) {
  if (value > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, value * 1000);
  } 
}

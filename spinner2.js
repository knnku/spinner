const spinner = "|/-\\|/-\\|\n";
let count = 0;

const spin = function() {
  if (count < spinner.length) { 
    process.stdout.write(`\r${spinner[count]}`);
    
    count++;
    setTimeout(spin, 300);
  }
}

spin();

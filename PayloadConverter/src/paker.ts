import program from 'commander';
import fs from 'fs';
import { Pak } from './PakFormat';
import { generate } from './sign';

program.option('-d --dir <dir>', 'base directory');
program.option('-i --input <pak>', 'pak to unpak');
program.option('-o, --output <file>', 'output file');

program.parse(process.argv);

if (program.dir !== undefined) {
  let recursive = require('recursive-readdir');
  require('mkdir-recursive');

  recursive(program.dir, function(err: any, files: string[]) {
    let pak: Pak = new Pak(program.dir + '.pak');
    for (let i = 0; i < files.length; i++) {
      pak.save_file(files[i]);
    }
    pak.update();
    if (fs.existsSync('./private_key.pem')) {
      let sig: Buffer = Buffer.from(generate(pak.fileName));
      let buf: Buffer = fs.readFileSync(program.dir + '.pak');
      let footer: Buffer = Buffer.from("SIGNED");
      let add_l: number = sig.byteLength + footer.byteLength;
      let nBuf: Buffer = Buffer.alloc(buf.byteLength + add_l);
      buf.copy(nBuf);
      let pos: number = buf.byteLength;
      sig.copy(buf, pos);
      pos+=sig.byteLength;
      footer.copy(buf, pos);
      fs.writeFileSync(program.dir + '.pak', buf);
    }
  });
}

if (program.input !== undefined) {
  let pak: Pak = new Pak(program.input);
  pak.extractAll(program.output);
}

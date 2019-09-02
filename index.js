const lightninghash = (data) => {
  return data + '*';
}

class Block {
  constructor(data,hash,lasthash) {
    this.data=data;
    this.hash=hash;
    this.lasthash=lasthash;
  }
}

class Blockchain {
  constructor() {
    const genesis = new Block('gen-data','gen-hash','gen-lasthash')
    this.chain=[genesis];
  }
  addblock(data){
    const lasthash = this.chain[this.chain.length-1].hash;
    const hash = lightninghash(data + lasthash);
    const block = new Block(data ,hash, lasthash);
    this.chain.push(block);
  }
}

const fooblockchain = new Blockchain;
fooblockchain.addblock('one');
fooblockchain.addblock('two');
fooblockchain.addblock('three');

console.log(fooblockchain);
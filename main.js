// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory= (specimenNum)=>{
  return {
    dnaBases:['A', 'T', 'C', 'G'],
    specimenNum: specimenNum,
    dna: mockUpStrand(),
    mutate(){
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      while(this.dna[randomIndex] === this.dnaBases[Math.floor(Math.random() * this.dna.length)]){
        randomIndex = Math.floor(Math.random() * this.dna.length);
      }
      this.dna[randomIndex] = this.dnaBases[Math.floor(Math.random() * 4)];
      console.log(`index to change ${randomIndex}`);
      return this.dna;
    },
    compareDNA(pAequor){
      let counter = 0;
      for(let i = 0; i < this.dna.length; i ++){
        if(pAequor.dna[i] === this.dna[i]){
          counter += 1;
        }
      }
      let percentage = (counter / this.dna.length)*100;

      return `specimen #1 and specimen #2 have ${Math.round(percentage)}% DNA in common`
    },
    willLikelySurvive(){
      let counterCOrG = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G' ){
          counterCOrG += 1;
        }
      }
      let fraction = counterCOrG/this.dna.length;
      console.log(fraction);
      if(fraction >= 0.6){
        return true;
      } else {
        return false;
      }
    }
  }
}

const object_1 = pAequorFactory(1);
const object_2 = pAequorFactory(2);
console.log(object_1.dna);
console.log(object_1.specimenNum);
console.log(object_1.mutate());
console.log('This is the DNA of the second Object: ')
console.log(object_2.dna);
console.log('This is the comparison: ')
console.log(object_1.compareDNA(object_2));
console.log(object_1.willLikelySurvive());










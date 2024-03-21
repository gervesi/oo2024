interface Adder{
   add(nr: number):void;
   getSum():number;
}

class CharCounter {
    constructor(protected adder: Adder) {}

    addWordCharacters(word: string): void {
        this.adder.add(word.length);
    }

    addWords(words: string[]): void {
        for (let word of words) {
            this.addWordCharacters(word);
        }
    }

    addSentenceCharacters(sentence: string): void {
        const words = sentence.split(" ");
        for (let word of words) {
            this.addWordCharacters(word);
        }
    }

    getCharacterCount(): number {
        return this.adder.getSum();
    }
}

class CountingAdder implements Adder{
    protected sum:number=0;
    protected count:number=0;
    protected max: number = Number.NEGATIVE_INFINITY;
    add(nr: number) {
        this.sum += nr;
        this.count++;
        if (nr > this.max) {
            this.max = nr;
        }
    }
    getSum(): number {
        return this.sum;
    }
    getAverage(): number {
        if(this.count>0){
            return this.sum/this.count;
        }
        return 0;
    }
    getMax(): number {
        return this.max;
    }
}

let adder1:CountingAdder=new CountingAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addSentenceCharacters("Tere kõigile");
counter1.addWords(["Juku", "tuli", "kooli", "õppima"]);

console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getMax());
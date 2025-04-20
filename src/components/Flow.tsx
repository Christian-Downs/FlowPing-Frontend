import Block from './block';

export default class Flow{

    public name:string;
    public blocks:Array<Block>;

    public constructor(name:string, blocks?:Array<Block>){
        this.name = name;
        this.blocks = blocks || [];
    }

    public addBlock (block:Block){
        this.blocks.push(block);
    }

}
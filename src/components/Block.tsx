

export default class Block{
    public value: string;
    public display :string;
    public description :string;

    public before: Array<Block>;
    public after: Array<Block>;
    public internal: Array<Block>;


    public constructor(value: string, display?: string, description?: string, before?: Array<Block>, after?: Array<Block>, internal?: Array<Block>) {
        this.value = value;
        this.display = display || '';
        this.description = description || '';
        this.before = before || [];
        this.after = after || [];
        this.internal = internal || [];
    }

    public addBefore(beforeBlock: Block): void;
    public addBefore(beforeBlocks: Array<Block>): void;
    public addBefore(before: Block | Array<Block>): void {
        if (Array.isArray(before)) {
            this.before.push(...before);
        } else {
            this.before.push(before);
        }
    }

    public addAfter(afterBlock: Block): void;
    public addAfter(afterBlocks: Array<Block>): void;
    public addAfter(after: Block | Array<Block>): void {
        if (Array.isArray(after)) {
            this.after.push(...after);
        } else {
            this.after.push(after);
        }
    }

    public addInternal(internalBlock: Block): void;
    public addInternal(internalBlocks: Array<Block>): void;
    public addInternal(internal: Block | Array<Block>): void {
        if (Array.isArray(internal)) {
            this.internal.push(...internal);
        } else {
            this.internal.push(internal);
        }
    }


}
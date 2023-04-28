import { Option,OptionType } from "./Option";

/**
 * Offset
 */
export class Offset extends Option {
    private readonly offset: number;

    /**
     * Offset Option Constructor
     *
     * @param offset records offset value
     */
    constructor(offset: number) {
        super(OptionType.OFFSET);
        this.offset = offset;
    }

    /**
     * Offset.of Static Constructor
     *
     * @param offset records offset value
     * @return new Offset Option Object
     */
    public static of(offset: number): Offset {
        return new Offset(offset);
    }

    getValue(): string {
        return String(this.offset);
    }
}
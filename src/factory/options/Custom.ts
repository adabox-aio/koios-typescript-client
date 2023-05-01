import {Option, OptionType} from "./Option";

/**
 * Custom
 */
export class Custom extends Option {

    private readonly key: string;
    private readonly value: string;

    /**
     * Custom Option Constructor
     *
     * @param key key parameter
     * @param value value parameter
     */
    constructor(key: string, value: string) {
        super(OptionType.CUSTOM);
        this.key = key;
        this.value = value
    }

    public override getOptionTypeValue(): string {
        return this.key;
    }

    getValue(): string {
        return  this.value
    }
}
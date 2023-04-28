import { Option, OptionType } from './Option';

/**
 * Limit
 */
export class Limit extends Option {

    private readonly limit: number;

    /**
     * Limit Option Constructor
     * @param limit records limit value
     */
    constructor(limit: number) {
        super(OptionType.LIMIT);
        this.limit = limit;
    }

    /**
     * Limit.of Static Constructor
     * @param limit records limit value
     * @returns new Limit Option Object
     */
    public static of(limit: number): Limit {
        if (limit >= 0) {
            return new Limit(limit);
        } else {
            throw new Error("Can only Limit by a positive Value");
        }
    }

    public getValue(): string {
        return String(this.limit);
    }
}
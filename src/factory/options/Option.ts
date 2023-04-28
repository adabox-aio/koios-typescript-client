/**
 * Option Type
 */
export enum OptionType {
    /**
     * FILTERING OPTION TYPE
     */
    FILTER = "filter",

    /**
     * LOGICAL FILTERING OPTION TYPE
     */
    LOGICAL_FILTER = "logical_filter",

    /**
     * NOT OPERATOR FILTERING OPTION TYPE
     */
    NOT_OPERATOR = "not_operator",

    /**
     * OFFSET OPTION TYPE
     */
    OFFSET = "offset",

    /**
     * LIMIT OPTION TYPE
     */
    LIMIT = "limit",

    /**
     * ORDER OPTION TYPE
     */
    ORDER = "order",

    /**
     * SELECT OPTION TYPE
     */
    SELECT = "select",

    /**
     * CUSTOM OPTION TYPE
     */
    CUSTOM = "custom"
}

export abstract class Option {
    private readonly optionType: OptionType;

    protected constructor(optionType: OptionType) {
        this.optionType = optionType;
    }

    abstract getValue(): string;

    getOptionTypeValue(): string {
        return this.optionType.toLowerCase();
    }

    getOptionType(): OptionType {
        return this.optionType
    }
}
import {Option, OptionType} from "../Option";

/**
 * Filter Type
 */
export enum FilterType {
    /**
     * equals
     */
    EQ = "eq",

    /**
     * greater than
     */
    GT = "gt",

    /**
     * greater than or equal
     */
    GTE = "gte",

    /**
     * less than
     */
    LT = "lt",

    /**
     * less than or equal
     */
    LTE = "lte",

    /**
     * not equal
     */
    NEQ = "neq",

    /**
     * LIKE operator (use * in place of %)
     */
    LIKE = "like", // TODO Not Supported

    /**
     * one of a list of values, e.g. ?a=in.("hi,there","yes,you")
     */
    IN = "in", // TODO Not Supported

    /**
     * checking for exact equality (null,true,false,unknown)
     */
    IS = "is", // TODO Not Supported

    /**
     * contains e.g. ?tags=cs.{example, new}
     */
    CS = "cs", // TODO Not Supported

    /**
     * contained in e.g. ?values=cd.{1,2,3}
     */
    CD = "cd", // TODO Not Supported
}

export class Filter extends Option {
    public readonly filterType: FilterType;
    public readonly field: string;
    public readonly value: string;

    constructor(field: string, filterType: FilterType, value: string) {
        super(OptionType.FILTER);
        this.filterType = filterType;
        this.field = field;
        this.value = value;
    }

    public static of(field: string, filterType: FilterType, value: string): Filter {
        return new Filter(field, filterType, value);
    }

    public override getOptionTypeValue(): string {
        return this.field;
    }

    public getValue(): string {
        return `${this.filterType}.${this.value}`;
    }
}
import { Option, OptionType } from '../Option';

/**
 * Not Operator Logical Operator Filter
 */
export class NotOperatorFilter extends Option {
    private readonly option: Option;

    /**
     * LogicalOperatorFilter Constructor
     *
     * @param option Option to negate
     */
    constructor(option: Option) {
        super(OptionType.NOT_OPERATOR);
        this.option = option;
    }

    /**
     * Filter.of Static Constructor
     *
     * @param option Option to negate
     * @return new NotOperatorFilter Option Object
     */
    static of(option: Option): NotOperatorFilter {
        if (option == null) {
            throw new Error('Cannot Negate null Option');
        }
        return new NotOperatorFilter(option);
    }

    public override getOptionTypeValue(): string {
        if (this.option.getOptionType() === OptionType.LOGICAL_FILTER) {
            return `not.${this.option.getOptionTypeValue()}`;
        } else {
            return this.option.getOptionTypeValue();
        }
    }

    public getValue(): string {
        if (this.option.getOptionType() === OptionType.LOGICAL_FILTER) {
            return this.option.getValue();
        } else {
            return `not.${this.option.getValue()}`;
        }
    }
}
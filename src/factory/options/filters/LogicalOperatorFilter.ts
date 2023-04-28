import { Option, OptionType } from '../Option';

/**
 * Logical Operator Filter Type
 */
export enum LogicalOperatorFilterType {
    OR = 'or',
    AND = 'and'
}

/**
 * Logical Operator Filter
 */
export class LogicalOperatorFilter extends Option {
    private readonly options: Option[];
    private readonly logicalOperatorFilterType: LogicalOperatorFilterType;

    /**
     * LogicalOperatorFilter Constructor
     *
     * @param logicalOperatorFilterType logicalOperatorFilterType
     * @param options List of Options
     */
    constructor(logicalOperatorFilterType: LogicalOperatorFilterType, options: Option[]) {
        super(OptionType.LOGICAL_FILTER);
        this.logicalOperatorFilterType = logicalOperatorFilterType;
        this.options = options;
    }

    /**
     * LogicalOperatorFilter.of Static Constructor
     *
     * @param logicalOperatorFilterType Operator Filter Type (OR/AND)
     * @param options options List
     * @return new LogicalOperatorFilter Option Object
     */
    public static of(logicalOperatorFilterType: LogicalOperatorFilterType, ...options: Option[]): LogicalOperatorFilter {
        if (!options || options.length === 0) {
            throw new Error('At least one Option Object is required');
        }
        return new LogicalOperatorFilter(logicalOperatorFilterType, options);
    }

    public getOptionTypeValue(): string {
        return this.logicalOperatorFilterType.toString().toLowerCase();
    }

    public getValue(): string {
        return '(' + this.options.map(option => option.getOptionTypeValue() + '.' + option.getValue()).join(',') + ')';
    }
}
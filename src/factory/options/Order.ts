import { Option, OptionType } from './Option';
import SortType from './SortType';

/**
 * Order
 */
export class Order extends Option {
    private readonly param: string;
    private readonly sortType: SortType;

    /**
     * Order Option Constructor
     *
     * @param param Parameter to Order By
     * @param sortType SortType ASC or DESC
     */
    constructor(param: string, sortType: SortType) {
        super(OptionType.ORDER);
        this.param = param;
        this.sortType = sortType;
    }

    /**
     * Order.by Static Constructor
     *
     * @param param Parameter to Order By
     * @param sortType SortType - ASC or DESC
     * @returns New Order Option Object
     */
    public static by(param: string, sortType: SortType): Order {
        return new Order(param, sortType);
    }

    getValue(): string {
        return `${this.param}.${this.sortType.toLowerCase()}`;
    }
}
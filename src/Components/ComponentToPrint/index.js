import * as React from "react";

import moment from "moment";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
    this.discounts = [];
  }

  canvasEl;

  componentDidMount() {
    const ctx = this.canvasEl.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
     
      ctx.fillStyle = "rgb(255,255,255)";
      ctx.fillRect(85, 40, 20, 20);
      ctx.save();
    }
  }

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;
    const { item } = this.props;
    const { discount } = this.props;

    console.log(discount);

    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {"\
   @page { size: landscape; }\
"}
        </style>
        <div className="flash" />

        <table className="testClass">
          <thead>
            <tr>
              <td>
                <h2 id="parent-modal-title">Order Summary</h2>
              </td>
              <td></td>
              <td>
                <p>
              <span style={{fontWeight:"bold"}}>Date:{" "}</span> 
                  
                  
                  {moment(item.createdAt).format("MMM Do YYYY , h:mm:ss a")}
                </p>
                <p>
              <span style={{fontWeight:"bold"}}>Order No.</span> 

                   {item.order_ref}
                </p>
              </td>
            </tr>
            <tr>
              <th>S/N</th>
              <th className="column1">Item</th>
              <th>Qty</th>
              <th>Price(&#8358;)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>{discount}</td>
              <td>{item?.order[0].orderQty}</td>

              <td>{item.order[0].orderPrice?.toLocaleString("en-US")}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <canvas height="50" ref={this.setRef} width="100">
                  {this?.item?.order_ref}
                </canvas>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>
                <h2 id="parent-modal-title">Payment Details</h2>
              </td>
              <td></td>
              <td>
                <p>
                <span style={{fontWeight:"bold"}}>PayStack Ref.</span>   {item.pay_stack_ref_id}
                </p>
                <p>
                <span style={{fontWeight:"bold"}}>Ordered By.</span>   {item.email}
                </p>
              </td>
            </tr>
            <tr>
              <th>Pay_Method</th>
              <th className="column1">Amount_Paid_In_Card (&#8358;)</th>
              <th className="column1">Amount_Paid_for_Item (&#8358;)</th>
              <th>Amount Paid In Point </th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
           
              <td>{item?.payment_method?.join(",")}</td>
              <td>{item.amount_paid_in_card?.toLocaleString("en-US")}</td>
              <td>{item.order[0].orderPrice?.toLocaleString("en-US")}</td>


              <td>{item.amount_paid_in_point}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <canvas height="50" ref={this.setRef} width="100">
                  {this?.item?.order_ref}
                </canvas>
              </td>
            </tr>
          </tbody>
          <tr>
            <td></td>
         
            <td>
              <h2>
              Total:
            

              </h2>
              </td>
            <td colSpan="2" >
              <p>Merchant to Receive <span style={{backgroundColor:"gray", color:"white"}}>   &#8358; {item.order[0].orderProductTotal?.toLocaleString("en-US")}</span> for this deal upon confirmation</p>
              <h1 style={{backgroundColor:"gray", color:"white"}}>   &#8358; {item.order[0].orderProductTotal?.toLocaleString("en-US")}</h1>
              </td>
          </tr>
        </table>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return (
    <ComponentToPrint
      ref={ref}
      text={props.text}
      item={props.item}
      discount={props.discount}
    />
  );
});

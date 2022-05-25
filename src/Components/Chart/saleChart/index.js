import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
  Tooltip,

} from "@devexpress/dx-react-chart-material-ui";
import { LineSeries } from "@devexpress/dx-react-chart";
import { styled } from "@mui/material/styles";
import { Animation } from "@devexpress/dx-react-chart";
import { connect, useSelector } from "react-redux";
import { Grid } from "@mui/material";

const PREFIX = "Demo";


const classes = {
  chart: `${PREFIX}-chart`,
};

const format = () => (tick) => tick;

const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label sx={{ pt: 1, whiteSpace: "nowrap" }} {...props} />
);
const Item = (props) => (
  <Legend.Item sx={{ flexDirection: "column" }} {...props} />
);

const ValueLabel = (props) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}`} />;
};

const TitleText = (props) => (
  <Title.Text {...props} sx={{ whiteSpace: "pre" }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: "20px",
  },
}));

const series = [
  { name: 'USA', key: 'usa', color: '#08abbd' },
  { name: 'Saudi Arabia', key: 'saudiArabia', color: '#78bc97' },
  { name: 'Iran', key: 'iran', color: '#d4d67e' },
  { name: 'Mexico', key: 'mexico', color: '#9ccc65' },
  { name: 'Russia', key: 'russia', color: '#1698af' },
 
];

const formatTooltip = format('.1f');
const TooltipContent = ({
  data, text, style, ...props
}) => {
  const alignStyle = {
    ...style,
    paddingLeft: '10px',
  };
  const items = series.map(({ name, key, color }) => {
    const val = data[key];
    return (
      <tr key={key}>
        <td>
          <svg width="10" height="10">
            <circle cx="5" cy="5" r="5" fill={color} />
          </svg>
        </td>
        <td>
          <Tooltip.Content style={alignStyle} text={name} {...props} />
        </td>
        <td align="right">
          <Tooltip.Content style={alignStyle} text={val ? formatTooltip(val) : 'N/A'} {...props} />
        </td>
      </tr>
    );
  });
  return (
    <table>
      {items}
    </table>
  );
};

export function Demo() {
  const arrayData = [
    { _id: 1, totalSale: 0 },
    { _id: 2, totalSale: 0 },
    { _id: 3, totalSale: 0 },
    { _id: 4, totalSale: 0 },
    { _id: 5, totalSale: 0 },
    { _id: 6, totalSale: 0 },
    { _id: 7, totalSale: 0 },
    { _id: 8, totalSale: 0 },
    { _id: 9, totalSale: 0 },
    { _id: 10, totalSale: 0 },
    { _id: 11, totalSale: 0 },
    { _id: 12, totalSale: 0 },
  ];

  let dataColumns = [
    { key: "_id", label: "month" },
    { key: "annoying", label: "unannoying" },
    { key: "somekey", label: "newSomeKey" },
    { key: "anotherKey", label: "newAnotherKey" },
  ];
  let stateData = useSelector((state) => state.merchants.orders.totalSale);

  console.log("======clickData=========");
  console.log(stateData);

  function getAllDataCols() {
    let obj = {};

    // Make a new object from all the dataColums for ease of use

    dataColumns.forEach((item) => {
      obj[item.key] = item.label;
    });

    return obj;
  }
  function processDataFromApi(newDataCols) {
    let result = [];

    arrayData?.forEach((obj) => {
      let newObj = {};

      Object.keys(obj).forEach((name) => {
        if (newDataCols[name] !== undefined) {
          //if we have an alternative for the name

          newObj[newDataCols[name]] = obj[name];
        } else {
          // we don't have an alternative. use the already existing name
          newObj[name] = obj[name];
        }
      });

      result.push(newObj);
    });

    return result;
  }

  let newDataCols = getAllDataCols();

  let response = processDataFromApi(newDataCols).map((item) => {
    switch (item.month) {
      case 1:
        return { ...item, month: "Jan",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0,};
      case 2:
        return { ...item, month: "Feb",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 3:
        return { ...item, month: "Mar",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 4:
        return { ...item, month: "April",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 5:
        return {
          ...item,
          month: "May",
          totalSale: stateData?.find((state) => state._id === item.month)
            ?.totalSale || 0,
          clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0,
        };
      case 6:
        return {
          ...item,
          month: "June",
          totalSale: stateData?.find((state) => state._id === item.month)
            ?.totalSale || 0,
          clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0,

        };
      case 7:
        return { ...item, month: "July",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 8:
        return { ...item, month: "August",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 9:
        return { ...item, month: "Sept",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 10:
        return { ...item, month: "Oct",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 11:
        return { ...item, month: "Nov",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };
      case 12:
        return { ...item, month: "Dec",  totalSale: stateData?.find((state) => state._id === item.month)
        ?.totalSale || 0,
      clicks: stateData?.find((state) => state._id === item.month)?.clicks || 0, };

      default:
        return item;
    }
  });

  console.log("=========response============");
  console.log(response);

  return (
    <Grid sm={9}>
      <Paper style={{ width: "80%", margin: "0 auto" }}>
        <StyledChart data={response} className={classes.chart}>
          <ArgumentAxis tickFormat={format} />
          <ValueAxis max={1000} labelComponent={ValueLabel} />

          <LineSeries
            name="Sale Count"
            valueField="totalSale"
            argumentField="month"
          />
        
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Title
            text={`Total Sales ${"\n"}`}
            textComponent={TitleText}
          />
          <Animation />
        </StyledChart>
      </Paper>
      
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    clickData: state.merchants.coupons.couponByMonth,
  };
};

export default connect(mapStateToProps)(Demo);

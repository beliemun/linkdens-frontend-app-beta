import { View } from "react-native";
import { VictoryArea, VictoryChart, VictoryLabel, VictoryLegend, VictoryTheme } from "victory-native";

interface IRadialGraph {
  animation?: boolean;
  [key: string]: any;
}

const LineGraph = ({ animation, ...rest }: IRadialGraph) => {
  return (
    <View {...rest}>
      <VictoryChart
        theme={VictoryTheme.material}
        minDomain={{ y: 0 }}
        maxDomain={{ y: 32 }}
        style={{ parent: { paddingBottom: 30 } }}
      >
        <VictoryLegend
          x={10}
          y={330}
          orientation="horizontal"
          gutter={50}
          style={{
            labels: {
              fontSize: 14,
            },
          }}
          data={[
            { name: "평균 잔존치아", symbol: { fill: "#2DBDEF30" } },
            { name: "나의 잔존치아", symbol: { fill: "#2DBDEF90" } },
          ]}
        />
        <VictoryArea
          style={{
            data: { stroke: "#2DBDEF", fill: "#2DBDEF50" },
            parent: { border: "1px solid #ccc" },
          }}
          interpolation={"cardinal"}
          data={[
            { x: "현재", y: 25 },
            { x: "5년 후", y: 24 },
            { x: "10년 후", y: 22 },
            { x: "15년 후", y: 19 },
            { x: "20년 후", y: 14 },
            { x: "25년 후", y: 11 },
            { x: "30년 후", y: 9 },
          ]}
          labels={({ datum }) => datum.y + "개"}
          labelComponent={
            <VictoryLabel
              style={{
                fontSize: 12,
              }}
              dx={-5}
              dy={15}
              textAnchor={"end"}
            />
          }
        />
        <VictoryArea
          style={{
            data: { stroke: "#2DBDEF90", fill: "#2DBDEF30" },
            parent: { border: "1px solid #ccc" },
            labels: { fill: "red" },
          }}
          interpolation={"cardinal"}
          data={[
            { x: "현재", y: 28 },
            { x: "5년 후", y: 28 },
            { x: "10년 후", y: 27 },
            { x: "15년 후", y: 25 },
            { x: "20년 후", y: 23 },
            { x: "25년 후", y: 21 },
            { x: "30년 후", y: 20 },
          ]}
          labels={({ datum }) => datum.y + "개"}
          labelComponent={
            <VictoryLabel
              style={{
                fontSize: 12,
                fill: "#00000060",
              }}
              dx={-5}
              dy={-10}
              textAnchor={"end"}
            />
          }
        />
      </VictoryChart>
    </View>
  );
};

export default LineGraph;

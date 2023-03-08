import { colors, tw } from "@shared";
import { View } from "react-native";
import { VictoryArea, VictoryChart, VictoryLabel, VictoryLegend, VictoryPolarAxis, VictoryTheme } from "victory-native";

interface IRadialGraph {
  animation?: boolean;
  [key: string]: any;
}

const RadialGraph = ({ animation, ...rest }: IRadialGraph) => {
  return (
    <View {...rest}>
      <View style={tw`flex-center mb-8`}>
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          domain={{ x: [0, 7], y: [0, 3.8] }}
          animate={animation && { duration: 1500, easing: "bounce" }}
        >
          <VictoryLegend
            x={10}
            y={330}
            orientation="horizontal"
            gutter={30}
            style={{
              labels: { fontSize: 14 },
            }}
            data={[
              { name: "4개월 전(2022-11-01)", symbol: { fill: "#2DBDEF30" } },
              { name: "1개월 전(2023-03-08)", symbol: { fill: "#2DBDEF90" } },
            ]}
          />
          <VictoryArea data={[2, 3, 3, 3, 2, 3, 1]} interpolation="cardinal" style={{ data: { fill: "#2DBDEF30" } }} />
          <VictoryArea
            data={[1, 1, 3, 2, 1, 2, 1]}
            interpolation="cardinal"
            style={{ data: { fill: "#2DBDEF90" } }}
            labels={({ datum }) => {
              return Number(datum._y.toFixed(0)) < 2 ? null : `위험도 ${datum._y.toFixed(0)}`;
            }}
            labelComponent={<VictoryLabel style={{ fontSize: 12 }} angle={0} />}
          />
          <VictoryPolarAxis
            tickValues={[
              "치아우식",
              "치주질환",
              "치아파절",
              "치근단염증",
              "치경부마모",
              "보철물손상",
              "신경치료후\n통증",
            ]}
            labelPlacement="vertical"
            style={{
              axis: { stroke: "#282D3230", strokeWidth: 1 },
              grid: { stroke: "#282D3230", strokeWidth: 1 },
              tickLabels: {
                fill: colors.dark,
                padding: 17,
                fontSize: 13,
                fontWeight: "bold",
              },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

export default RadialGraph;

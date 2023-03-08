import { View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTheme } from "victory-native";

interface IRadialGraph {
  animation?: boolean;
  [key: string]: any;
}

const StackGraph = ({ animation, ...rest }: IRadialGraph) => {
  return (
    <View {...rest}>
      <VictoryChart theme={VictoryTheme.material} minDomain={{ y: 0 }} style={{ parent: { paddingBottom: 10 } }}>
        <VictoryStack colorScale={["#2DBDEF30", "#2DBDEF30", "#2DBDEF90"]}>
          <VictoryBar
            data={[{ x: "구강 관리도", y: 1 }]}
            barWidth={200}
            labels={({ datum }) => "치경부마모 위험도 " + Number(datum.y + 1)}
            style={{ labels: { fontSize: 16, fontWeight: "bold" } }}
            labelComponent={<VictoryLabel dy={40} />}
            width={20}
          />
          <VictoryBar
            data={[{ x: "구강 관리도", y: 1 }]}
            barWidth={200}
            labels={({ datum }) => "치아파절 위험도 " + Number(datum.y + 1)}
            style={{ labels: { fontSize: 16, fontWeight: "bold" } }}
            labelComponent={<VictoryLabel dy={40} />}
            width={20}
          />
          <VictoryBar
            data={[{ x: "구강 관리도", y: 2 }]}
            barWidth={200}
            labels={({ datum }) => "치주질환 위험도 " + Number(datum.y + 1)}
            style={{ labels: { fontSize: 16, fontWeight: "bold" } }}
            labelComponent={<VictoryLabel dy={75} />}
            width={20}
            alignment={"middle"}
          />
        </VictoryStack>
        <VictoryAxis style={{ grid: { stroke: "transparent" } }} />
      </VictoryChart>
    </View>
  );
};

export default StackGraph;

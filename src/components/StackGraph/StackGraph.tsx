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
        <VictoryStack
          style={{ data: { strokeWidth: 2, stroke: "white" } }}
          colorScale={["#2DBDEF30", "#2DBDEF", "#2DBDEF30"]}
        >
          <VictoryBar
            data={[{ x: "구강 관리도", y: 1 }]}
            barWidth={200}
            labels={() => "구강 관리도 1점\n(6개월 후 방문 필요)"}
            style={{ labels: { fill: "#00000050", fontSize: 14 } }}
            labelComponent={<VictoryLabel dy={60} />}
            width={20}
            cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }}
          />
          <VictoryBar
            data={[{ x: "구강 관리도", y: 1 }]}
            barWidth={200}
            labels={() => "구강 관리도 2점\n(4개월 후 방문 필요)"}
            style={{ labels: { fill: "white", fontSize: 18, fontWeight: "bold" } }}
            labelComponent={<VictoryLabel dy={60} />}
            width={20}
            cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }}
          />
          <VictoryBar
            data={[{ x: "구강 관리도", y: 1 }]}
            barWidth={200}
            labels={() => "구강 관리도 3점\n(3개월 후 방문 필요)"}
            style={{ labels: { fill: "#00000050", fontSize: 14 } }}
            labelComponent={<VictoryLabel dy={60} />}
            width={20}
            alignment={"middle"}
            cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }}
          />
        </VictoryStack>
        <VictoryAxis style={{ grid: { stroke: "transparent" } }} />
      </VictoryChart>
    </View>
  );
};

export default StackGraph;

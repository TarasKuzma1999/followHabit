import { connect } from 'react-redux';
import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';




const Diagram = (props) => {
    
    let totalHabits = props.habits.length
    let completedHabits = props.habits.reduce((acc,cur) => {
        if(cur.isComplited){
            acc++            
        }
        return acc
    }, 0)

    let persent = Math.round(completedHabits / totalHabits * 100);
    return (
        <div>
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={200} height={200}
            data={[{ x: 1, y: persent }, { x: 2, y: 100 - persent }]}
            innerRadius={60}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={40}>
            {() => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={100} y={100}
                  text={`${persent}%`}
                  style={{ fontSize: 30 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    )
}

const mapStateToProps = (state) => state.habitsList

export default connect(mapStateToProps)(Diagram)
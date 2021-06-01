import { connect } from "react-redux"

const Heabits = (state) => {
    debugger
    return (
        <div>hello</div>
        
    )
}

const mapDispatchToProps = (state) => state.heditsList

export default connect(mapDispatchToProps)(Heabits)
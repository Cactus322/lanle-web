import { Box } from "@mui/material"
import { connect } from "react-redux"

const Dictionary = ({dictionary}) => {

    console.log(dictionary);

    return (
        <Box component="div">

        </Box>
    )
}

const mapStateToProps = ({ dictionary }: { dictionary: [string] }) => {
	return {
		dictionary: dictionary,
	}
}

export default connect(mapStateToProps, null)(Dictionary)
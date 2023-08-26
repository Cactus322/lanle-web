import { INoticeActionCreate } from '@/reducers/noticeReducer.types'
import { Alert } from '@mui/material'
import { connect } from 'react-redux'

const Notice = ({ notice }: { notice: INoticeActionCreate }) => {
	if (Object.keys(notice).length === 0) {
        return null
    } 

	return (
		<Alert
			severity={notice.type}
			sx={{ mt: 5, position: 'fixed', width: '100%' }}
		>
			{notice.content}
		</Alert>
	)
}

const mapStateToProps = ({ notice }: { notice: INoticeActionCreate }) => {
	console.log(notice)
	return {
		notice: notice,
	}
}

export default connect(mapStateToProps, null)(Notice)

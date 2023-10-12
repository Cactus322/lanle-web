import { GetServerSidePropsContext } from 'next'
import BookReader from './Reader'

export default BookReader

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			book: ctx.query.book,
		},
	}
}

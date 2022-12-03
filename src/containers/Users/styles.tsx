import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell'

export const TableCellWidthSize = styled(TableCell)<{width: string}>`
    max-width: ${props => props.width}px;
    min-width: ${props => props.width}px;
    width: ${props => props.width}px;
`


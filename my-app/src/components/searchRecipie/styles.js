import styled from 'styled-components'

export const AddFormContainer = styled.div`
  height: 100%;
  width: 100%;
  footer {
    display: flex;
    width: 100%;
    button: first-child {
      margin-right: 10px;
    }
  }
`

export const FormSpace = styled.div`
  margin: 15px 0 15px 0;
  flex-grow: 1;
  min-width: 250px;
`

export const RowSpaced = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputField = styled.div`
  flex: auto;
  padding-right: 10px;
`

export const MyButton = styled.div`
  flex: none;
`

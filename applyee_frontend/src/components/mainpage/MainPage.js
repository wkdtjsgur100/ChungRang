import React from 'react';
import { Container, Button, Search, Grid, Header } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const mainTitleStyle = {
    fontSize: '48px',
    color: '#9b9b9b',
    marginTop: '84px',
    marginBottom: '25px',
}
const subTitleStyle = {
    color: '#9b9b9b',
    fontSize: '25px',
    marginBottom: '59px'
}

const source = () => {

}
class TaskSearch extends React.Component{
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, result) => this.setState({ value: result.title })

    handleSearchChange = (e, value) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            this.setState({
                isLoading: false,
                results: [
                    {
                        title: 'test'
                    },
                    {
                        title: 'test2'
                    },
                ],
            })
        }, 500)
    }
    render(){
        const { isLoading, value, results } = this.state
        return(
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        );
    }
}
const MainPage = ({history}) => (
    <div>
        <Container text textAlign="center">
            <p style={mainTitleStyle}> 주변 사람에게 도움을 요청하세요 </p>
            <p style={subTitleStyle}>
                어떤 도움이 필요하세요? <br/>
            </p>
            <TaskSearch fluid/>
            <p>이용 안내</p>
        </Container>
        <Container text textAlign="center" style={{backgroundColor: '#eeeeee'}}>
            <Grid>
                <Grid.Column width={8}>
                    <p style={subTitleStyle}>1단계</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header>할 일을 작성하세요</Header>
                    <p style={subTitleStyle}>원하는 작업을 검색하세요</p>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
)

export default withRouter(MainPage);

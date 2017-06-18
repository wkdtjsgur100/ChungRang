import React from 'react';
import { Container, Button, Search, Grid, Header, Image } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import { DEFAULT_REQUEST_URL } from '../../constants'

const mainTitleStyle = {
    fontSize: '48px',
    marginTop: '84px',
    marginBottom: '25px',
}
const subTitleStyle = {
    fontSize: '25px',
    marginBottom: '59px',
    color: '5b5b5b'
}

class TaskSearch extends React.Component{
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, result) => {
        this.props.history.push('/');
        this.setState({ value: result.title })
    }

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
            placeholder="어떤 도움이 필요하세요?"
            {...this.props}
          />
        );
    }
}

const containerStyle={
    backgroundImage: 'url('+ DEFAULT_REQUEST_URL +'/media/background.png)',
    padding: '50px',
}
const containerBoxStyle={
    width: '500px',
    height: '500px',
    backgroundColor: '#ffffff',
}
const MainPage = ({history}) => (
    <div>
        <Container style={containerStyle}>
            <Container text textAlign="center" style={containerBoxStyle}>
                <div style={{padding: '30px'}}>
                    <p style={mainTitleStyle}> 주변 사람에게 도움을 요청하세요 </p>
                    <p style={subTitleStyle}>
                        원하시는 일을 청년들이 해결해드립니다. <br/>
                    </p>
                    <TaskSearch history={history} fluid/>
                </div>
            </Container>
        </Container>
        <Container textAlign="center">
            <p style={{fontSize: '35px', padding: '30px', marginTop: '80px'}}>유능한 청년들이 당신을 도와줍니다</p>
            <Grid>
                <Grid.Column width={8}>
                    <Image src={DEFAULT_REQUEST_URL + '/media/profile.png'}></Image>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p style={{fontSize: '30px'}}>이름 : 장선혁</p>
                    <p style={{fontSize: '20px'}}>이 청년은 이런저런 일을 잘하고 여태까지 무엇을 해왔으며...</p>
                </Grid.Column>
            </Grid>
        </Container>
        <Container textAlign="center" style={{backgroundColor: '#eeeeee'}}>
            <p style={{fontSize: '35px', padding: '30px', marginTop: '80px'}}>이용 안내</p>
            <p style={{fontSize: '20px', padding: '20px'}}>
                1단계 : 할일 선택하기 <br/><br/>
            2단계 : 장소 선택하기 <br/><br/>
        3단계 : 도움 받기<br/><br/><br/>
            </p>
        </Container>
    </div>
)

export default withRouter(MainPage);

import React, { Component, PropTypes } from 'react';
import {Item, Image, Icon, Button, Container} from 'semantic-ui-react';
import {DEFAULT_REQUEST_URL} from '../constants';

const propTypes = {
};
const defaultProps = {
};

const TaskerProfileItem = ({name, description, intro}) => (
    <Item>
      <Item.Image size='tiny' src={DEFAULT_REQUEST_URL + '/media/profile.png'} />
      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Meta>{description}</Item.Meta>
        <Item.Description>
          {intro}
        </Item.Description>
        <Item.Extra>
            <Button primary floated='right'>
                신청하기
                <Icon name='right chevron' />
            </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
)
class TaskerSelectionPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container text>
                <Item.Group divided>
                    <TaskerProfileItem name="장선혁" description="4,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                    <TaskerProfileItem name="이주원" description="5,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                    <TaskerProfileItem name="익명1" description="6,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                    <TaskerProfileItem name="익명2" description="7,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                    <TaskerProfileItem name="익명3" description="8,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                    <TaskerProfileItem name="익명4" description="5,000원 / hour" intro="여기에 이 사람에 대한 간단한 소개가 들어갑니다" />
                </Item.Group>
            </Container>
        );
    }
}
TaskerSelectionPage.propTypes = propTypes;
TaskerSelectionPage.defaultProps = defaultProps;
export default TaskerSelectionPage;

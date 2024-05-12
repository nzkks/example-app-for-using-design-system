import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Avatar } from '@nzkks/storybook-design-system';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  margin-bottom: 1em;
  padding: 0.5em;
`;

const Name = styled.span`
  margin-left: 5px;
  color: #333;
  font-size: 16px;
`;

export default function UserItem({ user: { name, avatarUrl } }) {
  return (
    <Container>
      <Avatar username={name} src={avatarUrl} />
      <Name>{name}</Name>
    </Container>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

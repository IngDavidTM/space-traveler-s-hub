import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Mission = ({
  name, description,
}) => (
  <tr>
    <td>
      {name}
    </td>
    <td>{description}</td>
    <td>Non-Active</td>
    <td><Button variant="outline-secondary">Join Mission</Button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default Mission;
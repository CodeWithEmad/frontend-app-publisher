import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import CreateCoursePage from '../../components/CreateCoursePage';
import { fetchOrganizations } from '../../data/actions/publisherUserInfo';
import { createCourse } from '../../data/actions/courseInfo';

const mapStateToProps = (state, props) => ({
  publisherUserInfo: state.publisherUserInfo,
  courseInfo: state.courseInfo,
  initialValues: props.initialValues,
  formValues: getFormValues('create-course-form')(state),
});

const mapDispatchToProps = {
  createCourse,
  fetchOrganizations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCoursePage);

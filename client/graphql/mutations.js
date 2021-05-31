/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPin = /* GraphQL */ `
  mutation CreatePin(
    $input: CreatePinInput!
    $condition: ModelPinConditionInput
  ) {
    createPin(input: $input, condition: $condition) {
      id
      title
      imageUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updatePin = /* GraphQL */ `
  mutation UpdatePin(
    $input: UpdatePinInput!
    $condition: ModelPinConditionInput
  ) {
    updatePin(input: $input, condition: $condition) {
      id
      title
      imageUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deletePin = /* GraphQL */ `
  mutation DeletePin(
    $input: DeletePinInput!
    $condition: ModelPinConditionInput
  ) {
    deletePin(input: $input, condition: $condition) {
      id
      title
      imageUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createVideoPin = /* GraphQL */ `
  mutation CreateVideoPin(
    $input: CreateVideoPinInput!
    $condition: ModelVideoPinConditionInput
  ) {
    createVideoPin(input: $input, condition: $condition) {
      id
      title
      VideoUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updateVideoPin = /* GraphQL */ `
  mutation UpdateVideoPin(
    $input: UpdateVideoPinInput!
    $condition: ModelVideoPinConditionInput
  ) {
    updateVideoPin(input: $input, condition: $condition) {
      id
      title
      VideoUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deleteVideoPin = /* GraphQL */ `
  mutation DeleteVideoPin(
    $input: DeleteVideoPinInput!
    $condition: ModelVideoPinConditionInput
  ) {
    deleteVideoPin(input: $input, condition: $condition) {
      id
      title
      VideoUrl
      rating {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      username
      location {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      comments {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createRate = /* GraphQL */ `
  mutation CreateRate(
    $input: CreateRateInput!
    $condition: ModelRateConditionInput
  ) {
    createRate(input: $input, condition: $condition) {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updateRate = /* GraphQL */ `
  mutation UpdateRate(
    $input: UpdateRateInput!
    $condition: ModelRateConditionInput
  ) {
    updateRate(input: $input, condition: $condition) {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deleteRate = /* GraphQL */ `
  mutation DeleteRate(
    $input: DeleteRateInput!
    $condition: ModelRateConditionInput
  ) {
    deleteRate(input: $input, condition: $condition) {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      firstName
      lastName
      ipAddress
      token
      followers {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      following {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      currentLocation {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      permissions {
        id
        username
        hideNearbyStatus
        hidePinsToPublic
        createdAt
        updatedAt
      }
      facebookLink
      instagramLink
      snapchatLink
      twitterLink
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      firstName
      lastName
      ipAddress
      token
      followers {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      following {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      currentLocation {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      permissions {
        id
        username
        hideNearbyStatus
        hidePinsToPublic
        createdAt
        updatedAt
      }
      facebookLink
      instagramLink
      snapchatLink
      twitterLink
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      firstName
      lastName
      ipAddress
      token
      followers {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      following {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      createdAt
      updatedAT
      currentLocation {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      permissions {
        id
        username
        hideNearbyStatus
        hidePinsToPublic
        createdAt
        updatedAt
      }
      facebookLink
      instagramLink
      snapchatLink
      twitterLink
      updatedAt
    }
  }
`;
export const createFollowers = /* GraphQL */ `
  mutation CreateFollowers(
    $input: CreateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    createFollowers(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updateFollowers = /* GraphQL */ `
  mutation UpdateFollowers(
    $input: UpdateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    updateFollowers(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deleteFollowers = /* GraphQL */ `
  mutation DeleteFollowers(
    $input: DeleteFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    deleteFollowers(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const createPermissions = /* GraphQL */ `
  mutation CreatePermissions(
    $input: CreatePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    createPermissions(input: $input, condition: $condition) {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;
export const updatePermissions = /* GraphQL */ `
  mutation UpdatePermissions(
    $input: UpdatePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    updatePermissions(input: $input, condition: $condition) {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;
export const deletePermissions = /* GraphQL */ `
  mutation DeletePermissions(
    $input: DeletePermissionsInput!
    $condition: ModelPermissionsConditionInput
  ) {
    deletePermissions(input: $input, condition: $condition) {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPin = /* GraphQL */ `
  query GetPin($id: ID!) {
    getPin(id: $id) {
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
export const listPins = /* GraphQL */ `
  query ListPins(
    $filter: ModelPinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVideoPin = /* GraphQL */ `
  query GetVideoPin($id: ID!) {
    getVideoPin(id: $id) {
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
export const listVideoPins = /* GraphQL */ `
  query ListVideoPins(
    $filter: ModelVideoPinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoPins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        username
        createdAt
        updatedAT
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRate = /* GraphQL */ `
  query GetRate($id: ID!) {
    getRate(id: $id) {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const listRates = /* GraphQL */ `
  query ListRates(
    $filter: ModelRateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        rating
        createdAt
        updatedAT
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers($id: ID!) {
    getFollowers(id: $id) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const listFollowerss = /* GraphQL */ `
  query ListFollowerss(
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowerss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAT
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPermissions = /* GraphQL */ `
  query GetPermissions($id: ID!) {
    getPermissions(id: $id) {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;
export const listPermissionss = /* GraphQL */ `
  query ListPermissionss(
    $filter: ModelPermissionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPermissionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        hideNearbyStatus
        hidePinsToPublic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

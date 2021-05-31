/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePin = /* GraphQL */ `
  subscription OnCreatePin {
    onCreatePin {
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
export const onUpdatePin = /* GraphQL */ `
  subscription OnUpdatePin {
    onUpdatePin {
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
export const onDeletePin = /* GraphQL */ `
  subscription OnDeletePin {
    onDeletePin {
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
export const onCreateVideoPin = /* GraphQL */ `
  subscription OnCreateVideoPin {
    onCreateVideoPin {
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
export const onUpdateVideoPin = /* GraphQL */ `
  subscription OnUpdateVideoPin {
    onUpdateVideoPin {
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
export const onDeleteVideoPin = /* GraphQL */ `
  subscription OnDeleteVideoPin {
    onDeleteVideoPin {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onCreateRate = /* GraphQL */ `
  subscription OnCreateRate {
    onCreateRate {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onUpdateRate = /* GraphQL */ `
  subscription OnUpdateRate {
    onUpdateRate {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onDeleteRate = /* GraphQL */ `
  subscription OnDeleteRate {
    onDeleteRate {
      id
      username
      rating
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFollowers = /* GraphQL */ `
  subscription OnCreateFollowers {
    onCreateFollowers {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onUpdateFollowers = /* GraphQL */ `
  subscription OnUpdateFollowers {
    onUpdateFollowers {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onDeleteFollowers = /* GraphQL */ `
  subscription OnDeleteFollowers {
    onDeleteFollowers {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
      id
      username
      createdAt
      updatedAT
      updatedAt
    }
  }
`;
export const onCreatePermissions = /* GraphQL */ `
  subscription OnCreatePermissions {
    onCreatePermissions {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePermissions = /* GraphQL */ `
  subscription OnUpdatePermissions {
    onUpdatePermissions {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePermissions = /* GraphQL */ `
  subscription OnDeletePermissions {
    onDeletePermissions {
      id
      username
      hideNearbyStatus
      hidePinsToPublic
      createdAt
      updatedAt
    }
  }
`;

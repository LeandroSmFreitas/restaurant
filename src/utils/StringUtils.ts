const formatDescription = (description: string) => {
    if (description.length > 49) {
      return description.substring(0, 58) + '...';
    }
    return description;
}

export const StringUtils = {
    formatDescription
}
const formatDescription = (description: string) => {
    if (description) {
      return description.substring(0, 58) + '...';
    }
}

export const StringUtils = {
    formatDescription
}
export function formatDate(dateString){
    
    const past = new Date(dateString);
    const now = new Date();

    const result = now - past;
    const seconds = Math.floor(result / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

      if (days <= 7) {
      return (`${days}d`);
    }else if(days > 7){
      return (`${dateString.slice(0, 10)}`)
    } else if (hours > 0) {
      return (`${hours}h`);
    } else if (minutes > 0) {
      return(`${minutes}m`);
    } else {
      return(`${seconds}s`);
    }
  };
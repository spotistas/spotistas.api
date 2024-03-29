import { type TrackProviderDto } from './TrackProvider';

export interface PlaylistProvider {
  getPlaylist: (id: string) => Promise<PlaylistProviderDto>;
  getOurPlaylists: (limit: number) => Promise<PlaylistProviderDto[]>;
}

export interface PlaylistProviderDto {
  id: string;
  name: string;
  description: string;
  followers: { total: number };
  images: Array<{ url: string }>;
  external_urls: { spotify: string };
  tracks: TracksProviderDto;
}

export interface TracksProviderDto {
  items: ItemProviderDto[];
}

export interface ItemProviderDto {
  added_at: string;
  is_local: boolean;
  track: TrackProviderDto;
}

def list_files_in_folder(service, folder_id):
    query = f"'{folder_id}' in parents and mimeType != 'application/vnd.google-apps.folder'"
    results = service.files().list(q=query, pageSize=1000, fields="nextPageToken, files(id, name)").execute()
    files = results.get('files', [])
    while 'nextPageToken' in results:
        page_token = results['nextPageToken']
        results = service.files().list(q=query, pageSize=1000, fields="nextPageToken, files(id, name)", pageToken=page_token).execute()
        files.extend(results.get('files', []))
    return files
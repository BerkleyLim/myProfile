package profile.back.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import profile.back.domain.vo.project.NotionAPIAuth;

@Service
public class ProjectService {
    /**
     * 노션 데이터 베이스 연동하는 API
     * 
     * @return
     */
    public Object notionProjectAPI(NotionAPIAuth notionAPIAuth) {
        System.out.println("ProjectService.notionProjectAPI");
        // System.out.println(notionAPIAuth.toString());
        URL url = null;
        String readLine = null;
        StringBuilder buffer = null;
        OutputStream outputStream = null;
        BufferedReader bufferedReader = null;
        BufferedWriter bufferedWriter = null;
        HttpURLConnection urlConnection = null;

        int connTimeout = 5000;
        int readTimeout = 3000;

        String sendData = ""; // 대다수의 경우 JSON 데이터 사용
        String apiUrl = "https://api.notion.com/v1/databases/" + notionAPIAuth.getNotionDBName() + "/query"; // 각자 상황에
                                                                                                             // 맞는 IP &
        // url 사용
        // String apiUrl =
        // "https://api.notion.com/v1/databases/e5917758cf094497a1f80298602a9ab0/query";
        // // 각자 상황에 맞는 IP &
        // // url 사용

        try {
            url = new URL(apiUrl);

            urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("POST");
            urlConnection.setConnectTimeout(connTimeout);
            urlConnection.setReadTimeout(readTimeout);
            urlConnection.setRequestProperty("Authorization",
                    notionAPIAuth.getAuthorization());
            urlConnection.setRequestProperty("Content-Type", notionAPIAuth.getContentType());
            urlConnection.setRequestProperty("Notion-Version", notionAPIAuth.getNotionVersion());
            urlConnection.setDoOutput(true);
            urlConnection.setInstanceFollowRedirects(true);

            outputStream = urlConnection.getOutputStream();

            bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, "UTF-8"));
            bufferedWriter.write(sendData);
            bufferedWriter.flush();

            buffer = new StringBuilder();
            if (urlConnection.getResponseCode() == HttpURLConnection.HTTP_OK) {
                bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8"));
                while ((readLine = bufferedReader.readLine()) != null) {
                    buffer.append(readLine).append("\n");
                }
            } else {
                buffer.append("\"code\" : \"" + urlConnection.getResponseCode() + "\"");
                buffer.append(", \"message\" : \"" + urlConnection.getResponseMessage() + "\"");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (bufferedWriter != null) {
                    bufferedWriter.close();
                }
                if (outputStream != null) {
                    outputStream.close();
                }
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        System.out.println("결과 : " + buffer.toString());

        return buffer;
    }

}

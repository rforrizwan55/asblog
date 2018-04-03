package in.abdulraqeeb.mypage.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import in.abdulraqeeb.mypage.common.GeneralUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection="posts")
@JsonIgnoreProperties(value = {"created","id"}, allowGetters = true)
public class Posts {

    @Id
    private int id = GeneralUtils.generateRandNumber();
    @NotBlank
    @Size(max=100)
    @Indexed(unique=true)
    private String title;
    private String content;
    private String user;
    private Date created = new Date();
    private long updated;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public long getUpdated() {
        return updated;
    }

    public void setUpdated(long updated) {
        this.updated = updated;
    }
}

package in.abdulraqeeb.mypage.repository;

import in.abdulraqeeb.mypage.model.Posts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepository extends MongoRepository<Posts,String> {
}

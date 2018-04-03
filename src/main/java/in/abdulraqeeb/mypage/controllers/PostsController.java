package in.abdulraqeeb.mypage.controllers;

import in.abdulraqeeb.mypage.model.Posts;
import in.abdulraqeeb.mypage.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PostsController {

    @Autowired
    PostsRepository postsRepository;

    @GetMapping("/posts")
    public List<Posts> getAllPosts(){
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "created");
        return postsRepository.findAll(sortByCreatedAtDesc);
    }

    @PostMapping("/posts")
    public Posts createTodo(@Valid @RequestBody Posts post) {
        return postsRepository.save(post);
    }
}
